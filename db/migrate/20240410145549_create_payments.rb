class CreatePayments < ActiveRecord::Migration[7.1]
  def change
    create_table :payments do |t|
      t.date :payment_date
      t.decimal :amount
      t.string :payment_method
      t.string :status

      t.timestamps
    end
  end
end
