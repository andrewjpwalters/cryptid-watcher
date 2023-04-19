class CryptidSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :unique_locations

  has_many :locations
  has_one :user

  def unique_locations
    object.locations.distinct
  end
end
