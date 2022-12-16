class Blog < ApplicationRecord
    #friendlyId gem for slugs
    extend FriendlyId
    friendly_id :title, use: :slugged

    #validates unique title
    validates :title, uniqueness: true

    #accociations
    has_many :reviews, dependent: :destroy
    belongs_to :user
    belongs_to :tag

    #custom method for avg score
    def avg_score
        self.reviews.average(:rating).round(2).to_f
    end
end
