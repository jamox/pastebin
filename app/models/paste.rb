class Paste < ActiveRecord::Base
  attr_accessible :body, :filename, :nick, :title, :encoding
  validates :body, :presence => true, :length => {:maximum => 1.megabytes}
  validates :key, :uniqueness => true
  LANG = {:Java => 'java', 'C++' => 'cpp', 'JavaScript' => 'java_script', 'Plain Text' => 'text', :HTML => 'html',:Ruby => 'ruby'}
=begin
  avail = :'c++'       => :cpp,
      :cplusplus   => :cpp,
      :ecmascript  => :java_script,
      :ecma_script => :java_script,
      :rhtml       => :erb,
      :eruby       => :erb,
      :irb         => :ruby,
      :javascript  => :java_script,
      :js          => :java_script,
      :pascal      => :delphi,
      :patch       => :diff,
      :plain       => :text,
      :plaintext   => :text,
      :xhtml       => :html,
      :yml         =>:text
=end  
  before_create :generate_key
  
  def generate_key 
    self.key = Digest::SHA1.hexdigest(Time.now.to_s+Random.rand.to_s+self.body).slice(0..7)
  end
  
end
