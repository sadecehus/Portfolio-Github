import React, { useEffect } from 'react';

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const result = await fetchFunction();

            setData(result);
        } catch (error) {
            //@ts-ignore
            setError(error instanceof Error ? error: new Error ('Bir hata meydana geldi'));
            
        }finally{
    setLoading(false)
  };
  } ;

 const reset = () =>{
    setData(null)
    setLoading(false)
    setError(null)
 }
 useEffect(() =>{
    if(autoFetch){
        fetchData();
    }
 }, [autoFetch]);
 return {data , loading , error , refetch:fetchData , reset};
};

export default useFetch;