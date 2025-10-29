class KittensController < ApplicationController
  def index
    @kittens = Kitten.all
  end

  def show
    @kitten = Kitten.find(params[:id])
  end

  def new
    @kitten = Kitten.new
  end

  def create
    @kitten = Kitten.build(kitten_params)

    if @kitten.save
      flash[:notice] = 'New kitten added! Welcome to the cute family ☀️'
      redirect_to kittens_path
    else
      flash.now[:alert] = 'Oops! Your kitten form has errors.'
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @kitten = Kitten.find(params[:id])
  end

  def update
    @kitten = Kitten.find(params[:id])

    if @kitten.update(kitten_params)
      flash[:success] = 'Kitty got an update! Even more purr-fect now.'
      redirect_to @kitten
    else
      flash.now[:error] = 'Nice try but your form has problems'
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @kitten = Kitten.find(params[:id])
    @kitten.destroy

    flash[:notice] = 'Bye bye kitty.'
    redirect_to root_path, status: :see_other
  end

  private

  def kitten_params
    params.require(:kitten).permit(:name, :age, :cuteness, :softness)
  end
end
