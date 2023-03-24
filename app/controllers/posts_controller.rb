class PostsController < ApplicationController
    def index
        render json: Post.all
      end
    
      def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
      end
    
      private
    
      def post_params
        params.permit(:comment)
      end
end
