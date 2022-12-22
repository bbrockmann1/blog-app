class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :slug, :content, :user_id, :review_id, :tag_id
  
end
