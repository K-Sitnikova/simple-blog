import { defineStore } from 'pinia'
interface PostState {
    posts: PostInfo[],
    post: PostInfo | null
}
export const useStore =  defineStore("postStore",{
    state: (): PostState => ({
        posts: [],
        post: null,
    }),
    actions: {
        async loadPostsList() {
            try {
                const response = await fetch("https://dummyjson.com/posts").then((res) => res.json());
               this.setPosts(response)
            } catch (error) {
                throw error;
            }
        },
        async loadPostById() {
            try {
                const id = Math.floor(Math.random() * 30);
                const response = await fetch(`https://dummyjson.com/posts/${id}`).then((res) => res.json());
                this.setPostById(response)
            } catch (error) {
                throw error;
            }
        },
        setPosts(posts: PostState) {
            this.posts = posts.posts;
        },
        setPostById(post: PostInfo) {
            this.post = post;
        }
    }
})

interface PostInfo {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: PostReactions[],
    views: number,
    userId: number
}

interface PostReactions {
    likes: number,
    dislikes: number
}
