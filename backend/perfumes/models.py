from django.db import models

class Nota(models.Model):
    nome = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nome

class LinkPerfume(models.Model):
    nome = models.CharField(max_length=100)
    url = models.URLField()

class Perfume(models.Model):
    nome = models.CharField(max_length=255)
    marca = models.CharField(max_length=255)
    descricao = models.TextField(blank=True, null=True)
    lancamento = models.DateField(blank=True, null=True)
    imagem = models.ImageField(upload_to='perfumes/', blank=True, null=True)
    nota_media = models.FloatField(default=0.0)

    familia_olfativa = models.CharField(max_length=100, blank=True, null=True)
    estilo = models.CharField(max_length=100, blank=True, null=True)
    intensidade = models.CharField(max_length=50, blank=True, null=True)
    fixacao = models.CharField(max_length=50, blank=True, null=True)

    # notas olfativas
    notas_cabeca = models.ManyToManyField(Nota, related_name='perfumes_cabeca', blank=True)
    notas_corpo = models.ManyToManyField(Nota, related_name='perfumes_corpo', blank=True)
    notas_fundo = models.ManyToManyField(Nota, related_name='perfumes_fundo', blank=True)

    # links
    links = models.ManyToManyField(LinkPerfume, related_name='perfumes', blank=True)

    def __str__(self):
        return f"{self.nome} - {self.marca}"
