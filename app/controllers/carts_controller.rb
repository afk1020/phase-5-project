class CartsController < ApplicationController
    def index
        carts = Cart.all
        render json: carts
    end

    def show
        cart_id = params[:id].to_i
        cart = Cart.find_by_id(cart_id)
        render json: cart
    end

    def create
        cart = Cart.create(cart_params)
        render json: cart 
    end

    def newcart
        product_1=Product.find(cart_params[:product_id])
        quantity_1 = cart_params[:quantity]
    
        cart = Cart.create(user_id: cart_params[:user_id])
        cart_items = CartItem.create(cart_id: cart.id, product_id: cart_params[:product_id], quantity: cart_params[:quantity], item_price: product_1.price*quantity_1)
        user = User.find(cart_params[:user_id])
        user.update(current_cart: cart.id)
        cart_items = cart.cart_items

        total = 0
        total_quantity = 0
        cart.cart_items.each {|item| total += item.item_price}
        cart.total_price = total

        cart.cart_items.each{|item| total_quantity += item.quantity}
        cart.total_qty = total_quantity
        cart.save

    ender json: current_site_user, include: '**'
    end

    def shipping
        cart = Cart.find(params[:id].to_i)
        cart.update(
            sh_rate: cart_params[:sh_rate].to_i,     
        )

        ReportMailer.cart_confirmation(current_site_user).deliver

        render json: current_site_user, include: '**'
    end

    def update
        cart = Cart.find(params[:id].to_i)
        cart.update(
                sh_fname: cart_params[:fname],
                sh_address: cart_params[:address],
                sh_city: cart_params[:city],
                sh_state: cart_params[:state],
                sh_zip: cart_params[:zip]
        )

        render json: current_site_user, include: '**'
    end

    private
    def cart_params
        params.permit(:user_id, :product_id, :fname, :address, :city, :state, :zip, :order_id, :sh_rate, :quantity)
    end

end
