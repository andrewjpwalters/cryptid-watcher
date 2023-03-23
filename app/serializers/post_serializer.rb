class PostSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :user
  has_one :cryptid
  has_one :location
end
