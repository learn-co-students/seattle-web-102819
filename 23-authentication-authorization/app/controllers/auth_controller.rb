class AuthController < ApplicationController
    def signin
    end

    def verify
        # byebug
        @teacher = Teacher.find_by(username: params[:auth][:username])
        # byebug
        if @teacher && @teacher.authenticate(params[:auth][:password])
            session[:user_id] = @teacher.id
            redirect_to students_path
        else 
            flash[:message] = "Incorrect detail please try again"
            render :signin
        end
    end

    def logout
        session.clear
        redirect_to login_path
    end

    def current_user
        @teacher = Teacher.find(session[:user_id])
    end
end