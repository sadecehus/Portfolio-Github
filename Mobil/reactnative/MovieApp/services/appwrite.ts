import { Client, Databases, ID, Query } from "appwrite";



const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const client = new Client()
.setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

export const updateSearchCount = async (query : string , movie: Movie) => {
    try {
const results = await database.listDocuments(DATABASE_ID, COLLECTION_ID,[Query.equal('searchTerm', query)])
console.log(results);


    //sorgu daha önce yapılmış mı kontrol et
    if (results.documents.length > 0) {
        const existingMovie = results.documents[0];
        await database.updateDocument(DATABASE_ID, COLLECTION_ID, existingMovie.$id, {
            count: existingMovie.count + 1,
        });
    } else {
        await database.createDocument(DATABASE_ID, COLLECTION_ID,ID.unique(),{
            searchTerm: query,
            movie_id: movie.id,
            title: movie.title,
            count: 1,
            poster_url:`https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        })
    } 
    }catch (error) { console.error("Error updating search count:", error); }


        //eğer yapılmışsa sayacı artır
//eğer yapılmamışsa yeni bir kayıt oluştur appwrite databaseye


}