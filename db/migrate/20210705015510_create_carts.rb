class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.string :status
      t.integer :user_id
      t.integer :total_price
      t.string  :ship_fname
      t.string  :ship_address
      t.string  :ship_city
      t.string  :ship_state
      t.string  :ship_zip
      t.integer :ship_rate


      t.timestamps
    end
  end
end
