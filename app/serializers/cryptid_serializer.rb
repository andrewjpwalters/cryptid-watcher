class CryptidSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :locations
  has_one :user
end
