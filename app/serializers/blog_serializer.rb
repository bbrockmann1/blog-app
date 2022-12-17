class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :user_id, :review_id, :tag_id
  
end
