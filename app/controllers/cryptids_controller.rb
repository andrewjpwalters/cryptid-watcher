class CryptidsController < ApplicationController
    def index
        render json: Cryptid.all
      end
    
      def create
        cryptid = @current_user.cryptids.create!(cryptid_params)
        render json: cryptid, status: :created
      end
    
      private
    
      def cryptid_params
        params.permit(:name, :description, :image_url)
      end
end
