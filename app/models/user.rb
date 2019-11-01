class User < ApplicationRecord
  has_secure_password
  has_many :messages
  validates :username, presence: true, uniqueness: {case_senstive: false}, length: {minimum: 3, maximum: 25}
end
