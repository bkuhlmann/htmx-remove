# frozen_string_literal: true

require "rack_helper"

RSpec.describe "Demo", :web do
  using Refinements::Pathnames

  subject :app do
    Rack::Static.new proc { [200, {"Content-Type" => "text/html"}, ["<h1>Demo</h1>"]] },
                     {
                       root: Bundler.root.join("tmp/demo"),
                       urls: %w[
                         /_button_form.html
                         /_link_form.html
                         /htmx-remove.js
                         /index.html
                         /stylesheet.css
                       ]
                     }
  end

  let(:demo_path) { Bundler.root.join "tmp/demo" }

  before do
    demo_path.remove_tree.make_path
    Bundler.root.join("demo").files.each { |path| path.copy demo_path }
    Bundler.root.join("lib/htmx-remove.js").copy demo_path
    Capybara.app = app
  end

  it "displays demonstration page" do
    visit "/index.html"
    expect(page).to have_content("Demonstration")
  end

  it "adds and removes link", :aggregate_failures do
    visit "/index.html"
    click_link "New Link"

    expect(page).to have_content("Cancel Link")

    click_link "Cancel"
    expect(page).not_to have_content("Cancel Link")
  end

  it "adds button", :aggregate_failures do
    visit "/index.html"
    click_link "New Button"

    expect(page).to have_content("Cancel Button")

    click_button "Cancel"
  end
end
