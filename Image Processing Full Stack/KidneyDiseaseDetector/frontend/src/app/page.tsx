'use client';

import { useState, useCallback } from 'react';
import { Upload, FileImage, Loader2, AlertCircle, CheckCircle2, Sparkles, Brain, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Detection {
  class: string;
  confidence: number;
  bbox: number[];
}

interface DetectionResults {
  success: boolean;
  detections: Record<string, Detection[]>;
  image: string;
  error?: string;
}

export default function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<DetectionResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = async (file: File) => {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPG, JPEG, or PNG)');
      return;
    }

    // Validate file size (max 16MB)
    if (file.size > 16 * 1024 * 1024) {
      setError('File size must be less than 16MB');
      return;
    }

    setError(null);
    setIsLoading(true);
    setResults(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data: DetectionResults = await response.json();

      if (data.success) {
        setResults(data);
      } else {
        setError(data.error || 'Failed to process image');
      }
    } catch (err) {
      setError('An error occurred while processing the image');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetUpload = () => {
    setResults(null);
    setError(null);
  };

  const getModelIcon = (modelName: string) => {
    const icons: Record<string, string> = {
      cyst: '💧',
      tumor: '🔴',
      stone: '⚫',
      kidney: '🫘',
    };
    return icons[modelName] || '🔍';
  };

  const getModelColor = (modelName: string) => {
    const colors: Record<string, string> = {
      cyst: 'from-yellow-400 to-orange-500',
      tumor: 'from-pink-500 to-purple-600',
      stone: 'from-red-500 to-orange-600',
      kidney: 'from-green-400 to-emerald-600',
    };
    return colors[modelName] || 'from-blue-400 to-blue-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      
      <div className="relative container mx-auto px-4 py-12 max-w-7xl">
        {/* Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Medical Imaging
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent mb-4">
            Kidney Disease Detection
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Upload a kidney image to detect cysts, stones, tumors using advanced AI models with high precision
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!results && !isLoading && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="border-2 border-dashed border-slate-200 bg-white/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-12">
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`
                      relative transition-all duration-300 rounded-xl p-12 text-center
                      ${isDragging 
                        ? 'bg-indigo-50 border-2 border-indigo-400 scale-105' 
                        : 'border-2 border-transparent hover:bg-slate-50'
                      }
                    `}
                  >
                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileInput}
                    />
                    
                    <motion.div 
                      className="flex flex-col items-center gap-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl">
                          <Upload className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-xl font-semibold text-slate-800">
                          Drop your medical image here
                        </p>
                        <p className="text-slate-500">or</p>
                        <Button
                          onClick={() => document.getElementById('fileInput')?.click()}
                          size="lg"
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
                        >
                          <FileImage className="w-5 h-5 mr-2" />
                          Browse Files
                        </Button>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Badge variant="outline" className="font-normal">JPG</Badge>
                        <Badge variant="outline" className="font-normal">JPEG</Badge>
                        <Badge variant="outline" className="font-normal">PNG</Badge>
                        <span>•</span>
                        <span>Max 16MB</span>
                      </div>
                    </motion.div>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>

              {/* Feature Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
              >
                {[
                  { icon: Brain, title: '4 AI Models', desc: 'Multi-model detection' },
                  { icon: Activity, title: 'High Accuracy', desc: '45%+ confidence threshold' },
                  { icon: Sparkles, title: 'Instant Results', desc: 'Real-time analysis' },
                ].map((feature, i) => (
                  <Card key={i} className="bg-white/50 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <feature.icon className="w-8 h-8 mx-auto mb-3 text-indigo-600" />
                      <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-600">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Loading State */}
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="bg-white shadow-2xl">
                <CardContent className="p-16 text-center">
                  <Loader2 className="w-16 h-16 text-indigo-600 animate-spin mx-auto mb-6" />
                  <h2 className="text-2xl font-semibold text-slate-800 mb-3">
                    Analyzing Image...
                  </h2>
                  <p className="text-slate-600">
                    Our AI models are processing your image. This may take a few seconds.
                  </p>
                  <div className="mt-6 flex justify-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Results */}
          {results && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <Card className="bg-white shadow-2xl">
                <CardHeader className="border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
                        <FileImage className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Detection Results</CardTitle>
                        <CardDescription>AI analysis complete</CardDescription>
                      </div>
                    </div>
                    <Button onClick={resetUpload} variant="outline">
                      Analyze Another
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  {/* Processed Image */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-indigo-600" />
                      Processed Image
                    </h3>
                    <div className="relative rounded-xl overflow-hidden border-2 border-slate-200 shadow-lg">
                      <img
                        src={`data:image/png;base64,${results.image}`}
                        alt="Processed"
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>

                  {/* Detections */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-indigo-600" />
                      Detected Conditions
                    </h3>
                    
                    {Object.keys(results.detections).length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                          <CardContent className="p-8 text-center">
                            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h4 className="text-xl font-semibold text-green-800 mb-2">
                              No Diseases Detected
                            </h4>
                            <p className="text-green-600">
                              The image appears to be healthy with no abnormalities detected
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(results.detections).map(([modelName, detectionArray], index) => (
                          <motion.div
                            key={modelName}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className={`
                              bg-gradient-to-br shadow-lg hover:shadow-xl transition-all duration-300 border-2
                              ${modelName === 'cyst' ? 'from-yellow-50 to-orange-50 border-yellow-200' : ''}
                              ${modelName === 'tumor' ? 'from-pink-50 to-purple-50 border-pink-200' : ''}
                              ${modelName === 'stone' ? 'from-red-50 to-orange-50 border-red-200' : ''}
                              ${modelName === 'kidney' ? 'from-green-50 to-emerald-50 border-green-200' : ''}
                            `}>
                              <CardHeader>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <span className="text-3xl">{getModelIcon(modelName)}</span>
                                    <CardTitle className="text-xl uppercase">{modelName}</CardTitle>
                                  </div>
                                  <Badge className={`
                                    ${modelName === 'cyst' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
                                    ${modelName === 'tumor' ? 'bg-pink-500 hover:bg-pink-600' : ''}
                                    ${modelName === 'stone' ? 'bg-red-500 hover:bg-red-600' : ''}
                                    ${modelName === 'kidney' ? 'bg-green-500 hover:bg-green-600' : ''}
                                  `}>
                                    {detectionArray.length} Found
                                  </Badge>
                                </div>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                {detectionArray.map((detection, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-slate-200"
                                  >
                                    <div className="flex items-start justify-between mb-2">
                                      <p className="font-semibold text-slate-900">
                                        {detection.class.toUpperCase()}
                                      </p>
                                      <Badge variant="secondary" className="font-mono">
                                        {(detection.confidence * 100).toFixed(1)}%
                                      </Badge>
                                    </div>
                                    <p className="text-xs text-slate-500 font-mono">
                                      [{detection.bbox.map(v => v.toFixed(0)).join(', ')}]
                                    </p>
                                  </div>
                                ))}
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
