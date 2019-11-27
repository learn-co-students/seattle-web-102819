class BrewsController < ApplicationController
    def index 
        @brews = Brew.all
    end

    def show
       locate
    end

    def new
        @brew = Brew.new
    end

    def create
        @brew = Brew.new(brew_params)
        @brew.save
        redirect_to @brew #brew_path(@brew)
    end

    def edit 
        locate
    end

    def update
        locate
        @brew.update(brew_params)
        redirect_to @brew #brew_path(@brew)
    end

    def strongest
        @brew = Brew.strongest
    end
    
    private
    def brew_params
        params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
    end

    def locate
        @brew = Brew.find(params[:id])
    end
end