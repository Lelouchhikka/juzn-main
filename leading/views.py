from django.shortcuts import render
from .models import Carousel, TextBlock, StatBlock, HistoryBlock, GeographyBlock, BrandCaruselBlock

def index(request):
    # Получаем данные из базы данных
    carousels = Carousel.objects.all()
    text_blocks = TextBlock.objects.all()
    stat_blocks = StatBlock.objects.all()
    history_blocks = HistoryBlock.objects.all()
    geography_blocks = GeographyBlock.objects.all()
    brand_carousel_blocks = BrandCaruselBlock.objects.all()

    # Передаем данные в контекст шаблона
    context = {
        'carousels': carousels,
        'text_blocks': text_blocks,
        'stat_blocks': stat_blocks,
        'history_blocks': history_blocks,
        'geography_blocks': geography_blocks,
        'brand_carousel_blocks': brand_carousel_blocks,
    }

    # Рендерим главную страницу с использованием данных из контекста
    return render(request, 'leading/index.html', context)