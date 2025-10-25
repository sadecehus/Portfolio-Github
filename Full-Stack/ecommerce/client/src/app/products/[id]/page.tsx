'use client'
import { Spinner } from '@/components/ui/spinner';
import { IProduct } from '@/model/IProduct';
import { useParams } from 'next/navigation';
import { useEffect, useEffectEvent, useState } from 'react';

export default function ProductDetail() {
    const { id } = useParams();
    const [product , setProduct] = useState<IProduct|null>(null);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5168/api/Products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))
        
    }, [id]);
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[90vh]">
                <Spinner className='size-16 opacity-80 font-bold' />
            </div>
        )
    }
    if (!product) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
                <p>The product you are looking for does not exist.</p>
            </div>
        )
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg">{product.description}</p>
        </div>
    );
}