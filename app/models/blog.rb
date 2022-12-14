class Blog < ApplicationRecord
    belongs_to :user
    belongs_to :tag
    has_many :reviews, dependent: :destroy
    
    before_create :slugify
    def slugify
        self.slug = title.parameterize
    end

    def avg_score
        self.reviews.average(:rating).round(2).to_f
    end
end
