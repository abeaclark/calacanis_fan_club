class WelcomeController < ApplicationController

  def index
    @count = Count.find(1)
  end

  def increment
    count = Count.find(1)
    count.number += 1
    count.save

    render json: count.number

  end

end
