class PetsController < ApplicationController
    def index
        @pets = Pet.all
    end

    def show
        # byebug
        @pet = Pet.find(params[:id])
    end
end
