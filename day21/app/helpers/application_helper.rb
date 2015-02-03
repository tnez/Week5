module ApplicationHelper
  def active_link(current_link)
    # puts params.inspect
    # params[:controller] == link_controller ? 'active' : ''
    :active if params[:controller] == current_link
  end

end
