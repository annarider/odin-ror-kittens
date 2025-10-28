class Kitten < ApplicationRecord
  validate :name, :age, presence: true
end
