class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :slug, :user_id, :review_id, :tag_id 
end
