class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :main_image, :quantity
end
