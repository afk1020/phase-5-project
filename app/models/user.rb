class User < ApplicationRecord
    has_secure_password
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    has_one :cart
    has_many :cart_items through: :carts

    # def user_cart(current_cart)
    #     self.orders.find(current_cart) 
    # end

    def current_carts
        # Given the current_cart (id), return all the items in that cart
        []
    end
end
