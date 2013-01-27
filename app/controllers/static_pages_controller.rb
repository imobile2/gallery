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
  def payroll
    render :layout => "layouts/payroll.html.erb"
  end
  def dropdown
    render :layout => "layouts/dropdown.html.erb"
  end
  def symphony_basic
    render :layout => "layouts/symphony.html.erb"
  end
  def symphony_enhanced
    render :layout => "layouts/symphony.html.erb"
  end
  def symphony_fullservice
    render :layout => "layouts/symphony.html.erb"
  end
  def frame_a
    render :layout => "layouts/frame.html.erb"
  end
  def frame_b
    render :layout => "layouts/frame.html.erb"
  end
  def frame_c
    render :layout => "layouts/frame.html.erb"
  end
  def harmony1
    render :layout => "layouts/harmony.html.erb"
  end
  def harmony2
    render :layout => "layouts/harmony.html.erb"
  end
  def harmony3
    render :layout => "layouts/harmony.html.erb"
  end
  def iqb
    render :layout => "layouts/iqb.html.erb"
  end
end
