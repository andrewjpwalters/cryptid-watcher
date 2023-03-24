class LocationsController < ApplicationController
    def index
        render json: Location.all
      end
    
      def create
        location = @current_user.locations.create!(location_params)
        render json: location, status: :created
      end
    
      private
    
      def location_params
        params.permit(:name)
      end
end
