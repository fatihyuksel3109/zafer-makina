'use client';

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Mesajınız Gönderildi!
        </h3>
        <p className="text-gray-600">
          En kısa sürede size geri dönüş yapacağız.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Ad Soyad *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Adınız ve soyadınız"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">E-posta *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ornek@email.com"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+90 5xx xxx xx xx"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject">Konu *</Label>
          <Select onValueChange={handleSelectChange} required>
            <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
              <SelectValue placeholder="Bir konu seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="parts-inquiry">Yedek Parça Sorgulama</SelectItem>
              <SelectItem value="stock-check">Stok Kontrolü</SelectItem>
              <SelectItem value="price-request">Fiyat Talebi</SelectItem>
              <SelectItem value="technical-support">Teknik Destek</SelectItem>
              <SelectItem value="general">Genel Bilgi</SelectItem>
              <SelectItem value="other">Diğer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mesajınız *</Label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Lütfen ihtiyacınızı detaylı olarak açıklayın..."
          className="min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-blue-800 hover:bg-blue-900"
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
            Gönderiliyor...
          </div>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Mesaj Gönder
          </>
        )}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        * Zorunlu alanlar. Kişisel verileriniz güvenlik altında tutulur.
      </p>
    </form>
  );
}