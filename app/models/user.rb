class User < ApplicationRecord
    has_secure_password
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    has_one :cart
    has_many :cart_items through: :carts

    # takes a plaintext password and stores a hashed version as a password_digest
    def password=(new_password)
        self.password_digest = dumb_hash(new_password)
     end

    # checks if the hashed plaintext password matches the password_digest
    def authenticate(password)
     return nil unless dumb_hash(password) == password_digest
     self
    end

    private

    # the hashing method
    def dumb_hash(input)
     input.bytes.reduce(:+)
        end

    # def user_cart(current_cart)
    #     self.orders.find(current_cart) 
    # end

    def current_carts
        # Given the current_cart (id), return all the items in that cart
        []
    end
end
