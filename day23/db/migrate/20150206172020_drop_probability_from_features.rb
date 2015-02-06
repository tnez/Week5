class DropProbabilityFromFeatures < ActiveRecord::Migration
  def change
    remove_column :features, :probability, :float
  end
end
