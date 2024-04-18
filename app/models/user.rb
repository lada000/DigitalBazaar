class User < ApplicationRecord
  has_many :products
  has_many :carts
  has_many :orders

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2]

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
