class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :slug, :content

  belongs_to :user
  belongs_to :tag
  has_many :reviews
end
