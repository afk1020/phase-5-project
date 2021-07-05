class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :current_cart, :current_carts

  # Once you've built out the current_orders method, go and rewrite our frontend logic
  has_many :carts
  # :user_cart(cart)

end
