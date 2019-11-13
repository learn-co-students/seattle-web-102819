class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :name
      t.string :publisher
      t.string :genre
      t.integer :pages
    end
  end
end
