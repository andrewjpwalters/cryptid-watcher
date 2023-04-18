class CryptidSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url

  has_many :locations
  has_one :user
end
