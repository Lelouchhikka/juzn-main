from django.db import models
from embed_video.fields import EmbedVideoField
from phonenumber_field.modelfields import PhoneNumberField


class Carousel(models.Model):
    title_ru = models.CharField(max_length=100, verbose_name='Тайтл Рус.')
    title_en = models.CharField(max_length=100, verbose_name='Тайтл Англ.')
    title_kk = models.CharField(max_length=100, verbose_name='Тайтл Каз.')
    content_ru = models.TextField(verbose_name='Крнтент Рус')
    content_en = models.TextField(verbose_name='Крнтент Англ')
    content_kk = models.TextField(verbose_name='Крнтент Каз')
    image = models.ImageField('Изображение', upload_to='carousel_images/')
    #video = EmbedVideoField()
    seo = models.CharField(max_length=100, verbose_name='SEO текст')

    def __str__(self):
        return self.title_ru
    

class TextBlock(models.Model):
    content_ru_b1 = models.TextField(verbose_name='Крнтент Рус блок 1')
    content_ru_b2 = models.TextField(verbose_name='Крнтент Рус блок 2')
    content_en_b1 = models.TextField(verbose_name='Крнтент Англ блок 1')
    content_en_b2 = models.TextField(verbose_name='Крнтент Англ блок 2')
    content_kk_b1 = models.TextField(verbose_name='Крнтент Каз блок 1')
    content_kk_b2 = models.TextField(verbose_name='Крнтент Каз блок 2')

    def __str__(self):
        return self.content_ru_b1
    

class StatBlock(models.Model):
    supermarket = models.IntegerField(verbose_name='Кол-во Супермаркетов')
    year = models.IntegerField(verbose_name='Лет на рынке')
    employee = models.IntegerField(verbose_name='Кол-во Сотрудников')
    sklad = models.IntegerField(verbose_name='Площать Складов')
    square_all = models.IntegerField(verbose_name='Общая площадь')
    square_mart = models.IntegerField(verbose_name='Торговая площадь')

    def __str__(self):
        return str(self.supermarket)
    

class HistoryBlock(models.Model):
    title = models.CharField(max_length=10, verbose_name='Дата')
    content_ru = models.TextField(verbose_name='Контент Рус')
    content_en = models.TextField(verbose_name='Контент Англ')
    content_kk = models.TextField(verbose_name='Контент Каз')

    def __str__(self):
        return self.title
    

class GeographyBlock(models.Model):
    icon = models.ImageField(upload_to='icons/')
    name_ru = models.CharField(max_length=100, verbose_name='Название на Рус.')
    name_en = models.CharField(max_length=100, verbose_name='Название на Англ.')
    name_kk = models.CharField(max_length=100, verbose_name='Название на Каз.')
    branch = models.IntegerField(verbose_name='Кол-во филиалов')

    def __str__(self):
        return self.name_ru
    

class BrandCaruselBlock (models.Model):
    brand_name = models.CharField(max_length=20, verbose_name='Наименование Сети.')
    is_video = models.BooleanField(default=False)
    video_url = models.URLField(blank=True, null=True, verbose_name='Ссылка для видео')
    image = models.ImageField(upload_to='carousel/', blank=True, null=True)

    def __str__(self):
        return self.brand_name
    
    
class PartnerRole(models.Model):
    name = models.CharField(max_length=20, verbose_name='Наименование роли партнера')

    def __str__(self):
        return self.name


class PartnershipApp(models.Model):
    type = models.ForeignKey(PartnerRole, on_delete=models.CASCADE, related_name='partnership_apps')
    name =  models.CharField(max_length=100, null=False)
    phone_number = PhoneNumberField(blank=True, null=False)
    email = models.EmailField(null=False)
    company = models.CharField(max_length=100, null=True)
    message = models.TextField(verbose_name='Текст Обращения')
    partner_file = models.FileField(upload_to='partner_file/', blank=True, null=True)

    def __str__(self):
        return self.type.name

class SEOtxt(models.Model):
    seo = models.TextField(verbose_name='Тест для SEO')

    def __str__(self):
        return self.seo