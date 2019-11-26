class BrewsController < ApplicationController
    def index
       @brews = Brew.all
    end 

    def show
        @brew = Brew.find(params[:id])
    end 

    def new
        @brew = Brew.new

    end 

    def create
        
        @brew = Brew.new(brew_params)
        if @brew.valid?
            @brew.save
            redirect_to brew_path(@brew)
        else 
            render :new 
        end    
    end 

    def edit
        @brew = Brew.find(params[:id])
        
    end

    def update
        @brew.update(brew_params)
        redirect_to brew_path(@brew)

    end

    def strongest

    end    
    def destroy
        @brew = Brew.find(params[:id])
        @brew.destroy
        redirect_to brews_path
    end
    private

    def brew_params
        params.require(:brew).permit(:blend_name,:origin,:notes,:strength)
    end

end
