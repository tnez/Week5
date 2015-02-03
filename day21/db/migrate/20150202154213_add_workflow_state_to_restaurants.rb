class AddWorkflowStateToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :workflow_state, :string
  end
end
