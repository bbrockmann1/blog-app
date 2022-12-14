class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :blog_id, :user_id
end
