class StaticPagesController < ApplicationController
  def home
  end
  def help
  end
  def about
  end
  def contact
  end
  # for gallery
  def guidelines
  end
  def grid
  end
  def font
  end
  def violator
  end
  def nav
    render :layout => "layouts/nav.html.erb"
  end
  def full
    render :layout => "layouts/full.html.erb"
  end
end
