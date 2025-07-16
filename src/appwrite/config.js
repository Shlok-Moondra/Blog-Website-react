import conf from '../conf/conf';
import { Client,ID,Databases,Storage,Query} from "appwrite"; 


export class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
             .setEndpoint(conf.appWriteURL)
             .setProject(conf.appWriteProjectId);
             this.databases = new Databases(this.client);
             this.bucket = new Storage(this.client);
    }


    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
          return await this.databases.createDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug,
            {
                title,
                slug,
                content,
                featuredImage,
                status,
                userId
            }
          );
        }
        catch(error){
            throw error;
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
     try{
      return await this.databases.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
            title,
            content,
            featuredImage,
            status
        }
      )
     }catch(error){
        throw error;
     }
    }

    async deletePost(slug){
        try{
             await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            );
            return true
        }catch(error){
            throw error;
            return false;
        }
        
    }

    async getPost(slug){
        try{
       return await this.databases.getDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug
        );
        }catch(error){
            throw error;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        );
    }

}




const databaseservice= new DatabaseService();
export default databaseservice;