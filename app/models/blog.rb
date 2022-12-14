class Blog < ApplicationRecord
    has_many :reviews, dependent: :destroy
    belongs_to :user
    belongs_to :tag
    
    before_create :slugify
    def slugify
        self.slug = title.parameterize
    end

    def avg_score
        self.reviews.average(:rating).round(2).to_f
    end
end
