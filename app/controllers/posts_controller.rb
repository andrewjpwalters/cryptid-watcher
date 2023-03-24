class PostsController < ApplicationController
    def index
        render json: Post.all
      end
    
      def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
      end

      def update
		post = Post.find_by(id:params[:id])
		if post
			post.update(post_params)
			render json: post, status: :accepted
		else
			render json: {error: “Post not found”}, status: :not_found
		end

        def destroy
            post = Post.find_by(id:params[:id])
            if post
                post.destroy
                head :no_content
            else
                render json: {error: “Post not found“}, status: :not_found
            end
        end
	end
    
      private
    
      def post_params
        params.permit(:comment, :cryptid_id, :location_id)
      end
end
