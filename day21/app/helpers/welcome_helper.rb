module WelcomeHelper
  def shia_magic
    content_tag(:div,
      image_tag("magic.gif") + 
      image_tag("magic.gif", class: "img-circle") + 
      image_tag("funny_images/sup_foo.jpg"),
      class: "col-md-4"
    )
  end
end
