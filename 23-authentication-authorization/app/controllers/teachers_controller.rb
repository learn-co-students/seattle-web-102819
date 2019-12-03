class TeachersController < ApplicationController
    def new
        @teacher = Teacher.new
    end

    def create
        # byebug
        @teacher = Teacher.create(teacher_params)
        session[:user_id] = @teacher.id
        redirect_to students_path
    end

    private
    def teacher_params
        params.require(:teacher).permit(:username, :email, :password, :password_confirmation)
    end
end
