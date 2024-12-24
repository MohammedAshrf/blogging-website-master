import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
  title: string;
  body: string;
  author?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;
export type { IPost };
