class Tag < ApplicationRecord
    has_many :blogs, dependent: :destroy
    has_many :users, through: :blogs

end
